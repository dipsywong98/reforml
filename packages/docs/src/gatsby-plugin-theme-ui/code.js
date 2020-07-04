export default {
  maxWidth: '100%',
  overflow: 'auto',
  fontFamily: 'monospace',
  fontSize: 'inherit',
  color: 'code.color',
  backgroundColor: 'code.backgroundColor',
  borderRadius: 3,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'border',
  px: 3,
  py: 2,
  tabSize: 4,
  MozTabSize: '4',
  '.token-line': {
    display: 'flex',
    flexWrap: 'wrap'
  },
  '.token': {
    display: 'inline-block',
    lineHeight: 1.5
  },
  '.prolog': {
    color: 'code.prolog'
  },
  '.comment': {
    color: 'code.comment'
  },
  '.builtin,.changed,.keyword': {
    color: 'code.keyword'
  },
  '.number': {
    color: 'code.number'
  },
  '.constant': {
    color: 'code.constant'
  },
  '.attr-name,.variable': {
    color: 'code.variable'
  },
  '.string,.attr-value': {
    color: 'code.string'
  },
  '.selector': {
    color: 'code.selector'
  },
  '.tag': {
    color: 'code.tag'
  },
  '.punctuation,.operator': {
    color: 'code.operator'
  },
  '.punctuation, .plain': {
    color: 'code.punctuation'
  },
  '.function': {
    color: 'code.function'
  },
  '.class-name': {
    color: 'code.className'
  },
  '.char': {
    color: 'code.char'
  },
  '.inserted': {
    backgroundColor: 'fgHighlights.green'
  },
  '.deleted': {
    backgroundColor: 'fgHighlights.red'
  },
  '.special': {
    color: 'red.0'
  },
  '.tab': {
    position: 'relative',
    '::before': {
      position: 'absolute',
      left: '1px',
      top: 'calc(50% - 0.5px)',
      content: '""',
      width: 'calc(100% - 3.5px)',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'red.0'
    },
    '::after': {
      position: 'absolute',
      right: '1px',
      top: 0,
      content: '">"',
      color: 'red.0'
    }
  }
}
