import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'thisbit/thisbitsand',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        label: fields.text({ label: 'Label', validation: { isRequired: false } }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: false } }),
        image: fields.image({
          label: 'Featured Image',
          directory: 'src/assets/images',
          publicPath: '../../assets/images/',
          validation: { isRequired: false },
        }),
        gallery: fields.array(
          fields.image({
            label: 'Gallery Image',
            directory: 'src/assets/images',
            publicPath: '../../assets/images/',
          }),
          { label: 'Gallery', itemLabel: (props) => props.value?.filename ?? 'Image' },
        ),
        order: fields.number({ label: 'Order' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    team: collection({
      label: 'Team',
      slugField: 'name',
      path: 'src/content/team/*',
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role', validation: { isRequired: false } }),
        avatar: fields.image({
          label: 'Avatar',
          directory: 'src/assets/images',
          publicPath: '../../assets/images/',
          validation: { isRequired: false },
        }),
        order: fields.number({ label: 'Order' }),
        content: fields.markdoc({ label: 'Bio' }),
      },
    }),
  },
});
