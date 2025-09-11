"use client"

import { use, useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Navbar from "../../components/layout/Navbar"

const BlogDetail = ({ params }) => {
  const { id } = params; // Desenrollar params usando React.use()

  const [entry, setEntry] = useState(null);
  const [assets, setAssets] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchEntry = async () => {
      const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
      const environmentId = "master";
      const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

      // Obtener detalles de la entrada con Contentful
      const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries/${id}?access_token=${accessToken}`;
      const response = await fetch(url);
      const data = await response.json();

      // Obtener los assets
      const imageId = data.fields.blogImage?.sys?.id;
      if (imageId) {
        const assetUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/assets?access_token=${accessToken}&sys.id[in]=${imageId}`;
        const assetResponse = await fetch(assetUrl);
        const assetData = await assetResponse.json();
        setAssets(assetData.items.reduce((acc, asset) => {
          acc[asset.sys.id] = asset.fields.file.url;
          return acc;
        }, {}));
      }

      setEntry(data); // Guardar la entrada
    };

    fetchEntry();
  }, [id]);

  // función para ver la estructura de los datos
  const logContentStructure = (content) => {
    console.log('Estructura del contenido:', JSON.stringify(content, null, 2));
  };

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const { file, title } = node.data.target.fields;
        return (
          <img src={file.url} alt={title} className="my-4 w-full" />
        );
      },
      'embedded-entry-block': (node) => {
        return (
          <div className="my-4">
            {documentToReactComponents(node.data.target.fields.content)}
          </div>
        );
      },
      'hyperlink': (node) => {
        const linkText = node.content.map(content => content.value).join('');
        return <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500">{linkText}</a>;
      },
      'paragraph': (node) => {
        logContentStructure(node); // ver estructura de los nodos del párrafo
        return (
          <p className="mb-4 text-base">
            {node.content.map((content, index) => {
              if (content.nodeType === 'hyperlink') {
                // si el nodo es un hipervínculo
                return (
                  <a
                    key={index}
                    href={content.data.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {content.content.map((subContent, subIndex) => subContent.value).join('')}
                  </a>
                );
              } else {
                  // si no es un hipervínculo mostrar el contenido normal
                return <span key={index}>{content.value}</span>;
              }
            })}
          </p>
        );
      },

      'heading-1': (node) => {
        return <h1 className="text-4xl font-bold mb-4">{node.content[0].value}</h1>;
      },
      'heading-2': (node) => {
        return <h2 className="text-3xl font-semibold mb-4">{node.content[0].value}</h2>;
      },
      'heading-3': (node) => {
        return <h3 className="text-2xl font-semibold mb-4">{node.content[0].value}</h3>;
      },
      'heading-4': (node) => {
        return <h4 className="text-xl font-semibold mb-4">{node.content[0].value}</h4>;
      },
      'unordered-list': (node) => {
        return (
          <ul className="list-disc pl-6 mb-4">
            {node.content.map((item, index) => {
              if (item.content && item.content[0]?.nodeType === 'paragraph') {
                return (
                  <li key={index} className="mb-2">
                    {item.content[0].content[0]?.value}
                  </li>
                );
              }
              return (
                <li key={index} className="mb-2">
                  Sin texto disponible
                </li>
              );
            })}
          </ul>
        );
      },
      'ordered-list': (node) => {
        return (
          <ol className="list-decimal pl-6 mb-4">
            {node.content.map((item, index) => {
              if (item.nodeType === 'paragraph' && item.content && item.content[0]?.value) {
                return (
                  <li key={index} className="mb-2">
                    {item.content[0]?.value}
                  </li>
                );
              }
              return (
                <li key={index} className="mb-2">
                  Sin texto disponible
                </li>
              );
            })}
          </ol>
        );
      },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground py-16 px-8 md:px-16 lg:px-32">
        {entry ? (
          <div>
            <img
              src={assets[entry.fields.blogImage?.sys?.id]}
              alt={entry.fields.blogImage?.fields?.title || "Imagen de blog"}
              className="w-full mb-8 md:w-3/4 lg:w-1/2 mx-auto rounded-lg mt-10"
            />
            <h1 className="text-4xl font-body mb-6 text-center">{entry.fields.blogTitle}</h1>
            <div>
              {documentToReactComponents(entry.fields.content, options)}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Navbar />
    </>
  );
};

export default BlogDetail;
