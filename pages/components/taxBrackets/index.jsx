import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import authToken from '../../../consts/authToken';
import colors from '../../../consts/colors';
import Tabs from './tabs';
import BracketDetails from './bracketDetails';
import ModalWrapper from '../modalWrapper';

class TaxBrackets extends Component {
  constructor() {
    super();

    this.state = {
      taxBrackets: {},
      taxBracketsLoaded: false,
      currentTab: 'head_of_household',
    };

    this.changeTab = this.changeTab.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `https://taxee.io/api/v2/federal/${(new Date()).getFullYear()}`,
      headers: {
        Authorization: authToken,
      },
    }).then((response) => {
      this.setState({ taxBrackets: response.data, taxBracketsLoaded: true });
    }).catch((error) => {
      console.log(error.response.data.description);
    });
  }

  changeTab(id, e) {
    e.stopPropagation();
    this.setState({ currentTab: id });
  }

  render() {
    const {
      taxBrackets, taxBracketsLoaded, currentTab,
    } = this.state;
    const {
      closeTaxBrackets,
    } = this.props;
    return (
      <ModalWrapper close={closeTaxBrackets}>
        <div className="padding">
          <style jsx>
            {`
            article {
                h1 {
                font-size: 2.5rem;

                &.loading {
                  font-size: 3.5rem;
                }
              }
            }
            `}
          </style>
          <article onClick={e => e.stopPropagation()}>
            {taxBracketsLoaded ? (
            <>
              <h1>{(new Date()).getFullYear()} Federal Tax Brackets</h1>
              <Tabs changeTab={this.changeTab} currentTab={currentTab} />
              <BracketDetails data={taxBrackets[currentTab]} />
            </>
            ) : (
              <h1 className="loading">Loading Tax Brackets...</h1>
            )}
          </article>
        </div>
      </ModalWrapper>
    );
  }
}

TaxBrackets.propTypes = {

};

export default TaxBrackets;
