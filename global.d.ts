/// <reference types="next" />

// CSS Module declarations
declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.sass' {
  const content: Record<string, string>
  export default content
}

// Temporary declaration for Vercel Analytics react entrypoint
declare module '@vercel/analytics/react'

