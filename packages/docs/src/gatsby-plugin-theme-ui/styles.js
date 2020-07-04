import code from './code'

export default {
  a: {
    color: 'primary',
    transition: 'color .2s ease-out',
    ':hover,:focus': {
      color: 'blue.0'
    }
  },
  inlineCode: {
    fontFamily: 'monospace',
    fontSize: '93.75%',
    color: 'code.keyword',
    backgroundColor: 'bgs.2'
  },
  code,
  pre: {
    ...code,
    fontFamily: 'monospace',
    overflowX: 'auto',
    fontSize: 'inherit',
    color: '#9CDCFE',
    backgroundColor: '#1E1E1E',
    borderRadius: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border',
    transition: 'background-color 0.2s ease-in-out',
    code: {
      color: 'inherit'
    }
  },
  blockquote: {
    p: 0,
    mx: 0,
    fontWeight: 'bold',
    fontSize: 3
  },
  h1: {
    variant: 'text.heading',
    mt: 2,
    fontSize: [5, 6]
  },
  h2: {
    variant: 'text.heading',
    fontSize: [4, 5]
  },
  h3: {
    variant: 'text.heading',
    fontSize: 3
  },
  h4: { variant: 'text.heading' },
  h5: { variant: 'text.heading' },
  h6: { variant: 'text.heading' },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  },
  th: {
    py: 2,
    textAlign: 'left',
    borderBottom: t => `4px solid ${t.colors.muted}`
  },
  td: {
    py: 2,
    textAlign: 'left',
    borderBottom: t => `1px solid ${t.colors.muted}`
  }
}
