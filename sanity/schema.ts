import { type SchemaTypeDefinition, type Rule } from 'sanity'

export const hero = {
  name: 'hero',
  title: 'Hero (Giriş)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Başlık (Merhaba, Ben)', type: 'string' },
    { name: 'name', title: 'İsim', type: 'string' },
    { name: 'subtitle', title: 'Alt Başlık (Ünvan)', type: 'string' },
    { name: 'description', title: 'Açıklama', type: 'text' }
  ]
}

export const about = {
  name: 'about',
  title: 'Hakkımda',
  type: 'document',
  fields: [
    { name: 'title', title: 'Bölüm Başlığı', type: 'string' },
    { name: 'description', title: 'Biyografi', type: 'text' },
    { name: 'skills', title: 'Yetenekler', type: 'array', of: [{ type: 'string' }] }
  ]
}

export const project = {
  name: 'project',
  title: 'Projeler',
  type: 'document',
  fields: [
    { name: 'title', title: 'Proje Adı', type: 'string' },
    { name: 'description', title: 'Açıklama', type: 'text' },
    { name: 'tech', title: 'Teknolojiler', type: 'array', of: [{ type: 'string' }] },
    { name: 'link', title: 'Proje Linki', type: 'url' }
  ]
}

export const social = {
  name: 'social',
  title: 'Sosyal Medya',
  type: 'document',
  fields: [
    { name: 'name', title: 'Platform Adı', type: 'string' },
    { name: 'url', title: 'URL', type: 'url', validation: (Rule: Rule) => Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }) },
    { name: 'icon', title: 'İkon Adı (Github, Linkedin, Twitter, Mail vs.)', type: 'string' }
  ]
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about, project, social],
}
