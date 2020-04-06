import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../css/color.js"

const PhotosWrap = styled.div`
  width: calc(100% - 40px);
  max-width: 480px;
  height: 400px;
  object-fit: cover;
  margin: auto;
  position: relative;
  padding: 0 0 60px 0;
  :nth-child(2n+1){
    padding: 0 0 60px 0;
  }
  @media screen and (max-width: 767px) {
    height: auto;
  }
`;


const PhotosTitle = styled.div`
  text-align: center;
  font-size: 1.4rem;
  color: ${color.baseText__thin}
  padding: 10px 0 0
`;

const PhotoModal = styled.div`
  z-index: 10000000000;
`;

const PhotoModalBack = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.6;
  z-index: 10000;
  cursor: pointer;
`;


class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  handleClickFunction = () => {
    this.setState({
      toggle: !this.state.toggle // state.toggleフラグを反転させる
    })
    if (!this.state.toggle){
      document.body.setAttribute('style', 'overflow: hidden;')
    } else {
      document.body.removeAttribute('style', 'overflow: hidden;')
    }

  }

  render() {
    return (
      <React.Fragment>
        <PhotosWrap>
          <img
            alt="my_photo"
            src={this.props.src}
            style={{
              objectFit: 'cover',
              position: 'relative',
              width: '100%',
              height:'100%',
              margin:'auto',
            }}
          />
          <PhotosTitle>{this.props.title}</PhotosTitle>
          <div
            to={this.props.to}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 100000,
              cursor: 'pointer'
            }}
            onClick={this.handleClickFunction}
          />
        </PhotosWrap>
        {/*this.state.toggle &&
          <React.Fragment>
            <PhotoModalBack
              onClick={this.handleClickFunction}
            />
            <PhotoModal>
              <img
                alt="my_photo"
                src={this.props.src}
                style={{
                  objectFit: 'cover',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '80vw',
                  height:'90vh',
                  margin:'auto',
                  zIndex:'1000000'
                }}
              />
            </PhotoModal>
          </React.Fragment>
        */}
      </React.Fragment>
    );
  }
}

export default Photo ;
