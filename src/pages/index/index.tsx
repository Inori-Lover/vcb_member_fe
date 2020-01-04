import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import('./main'),
  loading: () => null
})
