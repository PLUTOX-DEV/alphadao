/// <reference types="vite/client" />

interface ImportMetaEnv {
  // remove Supabase vars
  // add your own env vars if needed here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
