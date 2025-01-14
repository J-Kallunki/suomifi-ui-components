const path = require('path');
const glob = require('glob');

const primitiveComponents = [
  'Block',
  'Button',
  'Heading',
  'Icon',
  ['Form', 'TextInput'],
  ['Form', 'Toggle'],
  ['Form', 'SearchInput'],
];

const getComponent = ({ name, underName }) =>
  path.resolve(
    __dirname,
    `../src/core/${!!underName ? underName : name}/${name}.tsx`,
  );
const getComponents = arr =>
  arr.map(component =>
    Array.isArray(component)
      ? getComponent({
          name: component[1],
          underName: `${component[0]}/${component[1]}`,
        })
      : getComponent({ name: component }),
  );
const getComponentWithVariants = component => variants => [
  getComponent({ name: component }),
  ...variants.map(variant =>
    getComponent({ underName: component, name: variant }),
  ),
];

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: './.styleguidist/introduction.md',
      sections: [
        {
          name: 'Colors',
          content: './.styleguidist/colors.md',
        },
        {
          name: 'Typography',
          content: './.styleguidist/typography.md',
        },
        {
          name: 'Spacing',
          content: './.styleguidist/spacing.md',
        },
      ],
      sectionDepth: 1,
    },
    {
      name: 'Components',
      content: './.styleguidist/components.md',
      sections: [
        {
          name: 'Primitive',
          content: './.styleguidist/primitive.md',
          components: getComponents(primitiveComponents),
          sections: [
            {
              name: 'Text',
              components: getComponents(['Text', 'Paragraph']),
            },
            {
              name: 'Link',
              components: getComponentWithVariants('Link')(['LinkExternal']),
            },
          ],
        },
        {
          name: 'Patterns',
          content: './.styleguidist/patterns.md',
          sections: [
            {
              name: 'Breadcrumb',
              components: getComponentWithVariants('Breadcrumb')([
                'BreadcrumbLink',
              ]),
            },
            {
              name: 'Dropdown',
              components: getComponentWithVariants('Dropdown')([
                'DropdownItem',
              ]),
            },
            {
              name: 'Menu',
              components: getComponentWithVariants('Menu')([
                'MenuItemLanguage',
                'MenuLinkLanguage',
              ]),
            },
            {
              name: 'Panel',
              components: getComponentWithVariants('Panel')([
                'PanelExpansion',
                'PanelExpansionGroup',
              ]),
            },
          ],
        },
      ],
      sectionDepth: 2,
    },
  ],
};
