import React, { Component } from 'react';
import styled from 'styled-components'
import * as color from "../../css/color.js"

const PhotosWrap = styled.div`
  width: 480px;
  height: 320px
  position: relative;
`;


const PhotosTitle = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${color.baseText__thin}
  padding: 10px 0 0
`;

const PhotoModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #ccc;
`;


class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  func(e) {
    this.setState({
      toggle: !this.state.toggle // state.toggleフラグを反転させる
    });
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
            onClick={this.func}
          />
        </PhotosWrap>
        {this.state.toggle &&
          <PhotoModal>
          </PhotoModal>
        }
      </React.Fragment>
    );
  }
}

export default Photo ;
