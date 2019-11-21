import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20, 
    border: '2px solid black',
    fontSize: '1.2em',
    backgroundColor: "beige"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <hr/>
    {props.children}
  </div>
);

export default Layout;