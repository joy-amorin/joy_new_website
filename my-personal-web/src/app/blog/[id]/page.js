"use client"

import { use, useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Navbar from "../../components/layout/Navbar"

const BlogDetail = ({ params }) => {
  const { id } = params;

  const [entry, setEntry] = useState(null);
  const [assets, setAssets] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchEntry = async () => {
      const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
      const environmentId = "master";
      const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

      const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries/${id}?access_token=${accessToken}`;
      const response = await fetch(url);
      const data = await response.json();

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

      setEntry(data);
    };

    fetchEntry();
  }, [id]);

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
        logContentStructure(node);
        return (
          <p className="mb-4 text-base">
            {node.content.map((content, index) => {
              if (content.nodeType === 'hyperlink') {
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
                return <span key={index}>{content.value}</span>;
              }
            })}
          </p>
        );
      },
      'heading-1': (node) => <h1 className="text-4xl font-bold mb-4">{node.content[0].value}</h1>,
      'heading-2': (node) => <h2 className="text-3xl font-semibold mb-4">{node.content[0].value}</h2>,
      'heading-3': (node) => <h3 className="text-2xl font-semibold mb-4">{node.content[0].value}</h3>,
      'heading-4': (node) => <h4 className="text-xl font-semibold mb-4">{node.content[0].value}</h4>,
      'unordered-list': (node) => (
        <ul className="list-disc pl-6 mb-4">
          {node.content.map((item, index) => {
            if (item.content && item.content[0]?.nodeType === 'paragraph') {
              return <li key={index} className="mb-2">{item.content[0].content[0]?.value}</li>;
            }
            return <li key={index} className="mb-2">Sin texto disponible</li>;
          })}
        </ul>
      ),
      'ordered-list': (node) => (
        <ol className="list-decimal pl-6 mb-4">
          {node.content.map((item, index) => {
            if (item.nodeType === 'paragraph' && item.content && item.content[0]?.value) {
              return <li key={index} className="mb-2">{item.content[0]?.value}</li>;
            }
            return <li key={index} className="mb-2">Sin texto disponible</li>;
          })}
        </ol>
      ),
    },
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground py-16 px-4 md:px-8">
        {entry ? (
          <div className="max-w-5xl mx-auto"> {/* 👈 contiene todo el contenido */}
            <img
              src={assets[entry.fields.blogImage?.sys?.id]}
              alt={entry.fields.blogImage?.fields?.title || "Imagen de blog"}
              className="w-full max-h-72 object-cover rounded-lg mt-10 mb-8" // 👈 altura máxima + object-cover
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