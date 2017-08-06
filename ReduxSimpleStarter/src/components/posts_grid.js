import React, { Component } from 'react';
import StarRating from 'react-star-rating';

class PostsGrid extends Component {

  getTeasers() {
    const teasers = {
      type: 'REVIEWS',
      items: [{
        nid: 1,
        carType: 'Mercedes',
        teaserTitle: 'New Mercedes A-Class Saloon – everything you need to know',
        path: '/advice/title-article-1',
        teaserCopy: 'The Mercedes Concept A previews next year’s A-Class Saloon and the fourth-generation A-Class hatchback. Here\'s what to expect...',
        image: {
          'src': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/fa3a848996a565dc7a06b6ac4f63ea82f50a18ec.jpg',
          'src@2x': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/fa3a848996a565dc7a06b6ac4f63ea82f50a18ec.jpg',
        },
        rating: 3
      },
      {
        nid: 2,
        carType: 'Volkswagen',
        teaserTitle: 'New Volkswagen ID Crozz concept previews electric SUV',
        path: '/advice/title-article-2',
        teaserCopy: 'Volkswagen has revealed details of its latest ID concept car ahead of its launch at the Shanghai motor show.',
        image: {
          'src': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/339ff94be29c8224fddf5b54463f8546aa21325b.jpg',
          'src@2x': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/339ff94be29c8224fddf5b54463f8546aa21325b.jpg',
        },
        rating: 5
      },
      {
        nid: 345,
        carType: 'Citroën',
        teaserTitle: 'Citroën C5 Aircross to launch next year',
        path: '/advice/title-article-3',
        teaserCopy: 'BMW\'s new 5 Series saloon scores highly in safety tests, but the Fiat Doblo people carrier disappoints.',
        image: {
          'src': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/8c0cd2a7c3cebf10e7d909792f4e2ccb71972bd2.jpg',
          'src@2x': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/8c0cd2a7c3cebf10e7d909792f4e2ccb71972bd2.jpg',
        },
        rating: 4
      },
      {
        nid: 5690,
        carType: 'Skodas',
        teaserTitle: 'Details of Skodas first ever electric car revealed',
        path: '/advice/title-article-4',
        teaserCopy: 'The May issue of What Car? magazine is now on sale; all this and more inside.',
        image: {
          'src': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/f4f4b7f05796733e3a9a1017ef78e4f3d58114ae.jpg',
          'src@2x': 'http://whatcar.media/jpg/85/0/0/640/426/0/0/0/0/0/center/0/0/0/0/0/images/uploads/carousels/f4f4b7f05796733e3a9a1017ef78e4f3d58114ae.jpg',
        },
        rating: 1
      }]
    };
    return teasers
  }

  handleOnRatingClick(e, position) {
    console.log(position.rating)
  }

  getTeaserComponents(teasers) {
    const teaserComponents = []
    teasers.items.map(item => {
      console.log(item);
      const teaser =  <div key={item.nid} className="col-xs-12 col-sm-6 col-md-3 col-lg-3"><p/>
                          <h3 className="label label-default" style={{backgroundColor: 'black'}}>REVIEWS</h3>
                          <img style={{width: '100%'}} src={item.image.src} alt="car" /><p/>
                          <h4><strong>{item.carType}</strong></h4>
                          <p>{item.teaserTitle}</p>
                          <StarRating name="airbnb-rating" totalStars={5} onRatingClick={this.handleOnRatingClick} size={20}/><p/>
                          <p style={{height: '100px'}} >{item.teaserCopy}</p>
                      </div>

      teaserComponents.push(teaser)
    });
    return teaserComponents
  }

  render() {
    const teasers = this.getTeasers()
    const teaserComponents = this.getTeaserComponents(teasers)

    return (
      <div>
        <div className="grid">
            {teaserComponents}
        </div>
      </div>
    );
  }
}

export default PostsGrid;
