import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Menu from 'reapp-ui/components/Menu';
import Button from 'reapp-ui/components/Button';
import LayoutLeftNav from 'reapp-ui/views/LayoutLeftNav';

export default React.createClass({
  render() {
    var button = (
      <Button
        iconProps={{
          name: 'hamburger',
          stroke: 1,
          size: 26,
          shapeRendering: 'crispEdges'
        }}
        chromeless />
    );

    var menu = (
      <Menu>
        <Link to="page">{{reappName}}</Link>
      </Menu>
    );

    return (
      <LayoutLeftNav
        title="{{reappName}}"
        side={menu}
        handle={button}>
        <RouteHandler {...this.props} />
      </LayoutLeftNav>
    );
  }
});