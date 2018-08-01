import { render } from 'react-dom';
import React, { Component, Fragment } from 'react';

import Header from './Header/Header';
import Post from './Post/Post';
import './style.css';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Diego Lima Freitas',
        avatar:
          'https://ae01.alicdn.com/kf/HTB1nov5ov2H8KJjy0Fcq6yDlFXaJ/DIY-Modelos-de-quadros-culos-de-sol-dos-homens-jaqueta-modelos-masculinos-de-couro-esta-es.jpg_640x640.jpg',
        minutesAgo: 1,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus felis, rutrum sit amet efficitur in, mollis sit amet odio. Nunc at rhoncus sem. Donec porttitor lorem sed laoreet molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque non augue massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi feugiat suscipit elit, sit amet blandit enim pellentesque id. Ut scelerisque turpis faucibus nulla efficitur, nec elementum urna egestas. Donec lobortis scelerisque arcu. Vivamus eu leo purus. Nullam eu odio sollicitudin, imperdiet nibh vitae, tristique velit. Suspendisse semper luctus diam at aliquam. Proin sit amet dictum justo. Mauris ac ligula tellus. Aliquam non mi a mi iaculis semper. Maecenas tempor ex ut urna lacinia, id fringilla eros efficitur.',
      },
      {
        id: 2,
        author: 'Maurício Silva Domingos',
        avatar:
          'https://ae01.alicdn.com/kf/HTB1nov5ov2H8KJjy0Fcq6yDlFXaJ/DIY-Modelos-de-quadros-culos-de-sol-dos-homens-jaqueta-modelos-masculinos-de-couro-esta-es.jpg_640x640.jpg',
        minutesAgo: 5,
        message:
          'Suspendisse sagittis eleifend varius. Donec egestas metus nibh, et luctus nisi laoreet non. Integer in ex nibh. Mauris luctus massa eu nisi pulvinar finibus non ac ex. Etiam tincidunt hendrerit velit, in vehicula felis efficitur quis. Proin sagittis elementum leo. Duis vulputate in ante nec sodales. Sed laoreet enim in ante viverra fringilla. Aliquam erat volutpat. Nulla eu massa molestie, faucibus arcu feugiat, vulputate quam. Maecenas tincidunt, est eget suscipit finibus, enim eros volutpat nunc, a ultricies dui magna eu ligula. Pellentesque quis fermentum arcu. Fusce sit amet dignissim sapien. Mauris venenatis aliquam arcu sit amet porta. Mauris egestas venenatis tellus in consequat.',
      },
      {
        id: 3,
        author: 'Cecília Porto Medeiros',
        avatar: 'https://i0.statig.com.br/bancodeimagens/dk/ua/ly/dkualysqu8fn9n4qj15lfu2n5.jpg',
        minutesAgo: 8,
        message:
          'Donec eu lorem et nisi semper tincidunt in in ex. Pellentesque vitae ligula nec est semper commodo. Nullam viverra dui id ante porta fermentum. Duis laoreet nulla eu ante ullamcorper placerat. Suspendisse convallis ante sit amet bibendum vestibulum. Maecenas id facilisis odio. ',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.posts.map((post, _index) => <Post key={post.id} post={post} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
