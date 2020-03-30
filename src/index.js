import vdom from './vdom';

const App = () => (
  <div id="container" className="fluid">
    <span>Hello</span>
    <div className="menu">Menu</div>
  </div>
);

vdom.render(<App />, document.getElementById('app'));