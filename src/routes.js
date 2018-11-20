import Loadable from 'react-loadable'
const Loading = () => null

//路由配置
export const routes = [
    {
      path:'/',
      exact:true,
      component: Loadable({
        loader: () => import('@/pages/home'),
        loading:Loading
      }),
      title:'首页1',
    },
  ];
  
  