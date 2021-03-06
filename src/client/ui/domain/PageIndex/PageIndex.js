import React from 'react';
import logo from '~/src/client/assets/images/bobowl-logo-font-white.svg';
import styles from './style.css';
import Content from '../../uikit/sections/Content';
import Subscribe from '../../uikit/containers/Subscribe';

class PageIndex extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <Content verticalAlign="middle">
          <div>
            <div className={styles.subHeading}>DON'T MISS SOMETHING COOL</div>
            <Subscribe />
          </div>
        </Content>
      </div>
    );
  }
}

export default PageIndex;
