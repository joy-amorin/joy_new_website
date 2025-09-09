import jwt from "jsonwebtoken";

export function generateToken(productSlug) {
    
  // tiempo de expiración:
  const token = jwt.sign(
    { slug: productSlug },
    process.env.JWT_SECRET, // clave secreta
    { expiresIn: "10m" }
  );
  return token;
}

// verificar el token
export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
}
