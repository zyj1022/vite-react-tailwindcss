// 所有没有@types定义的第三方库，在此处定义
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.less';
declare module '*.scss';
declare module '*.css';
declare module '*.svg';
declare module '*.png';
declare module 'echarts/lib/*';
declare module 'array-from';
declare module 'react-lazy-load';
declare module 'wordcloud';
declare module 'path';
