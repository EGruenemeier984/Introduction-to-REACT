import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20, 
    border: '2px solid black',
    fontSize: '1.2em',
    textAlign: 'center',
    backgroundColor: "beige"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;