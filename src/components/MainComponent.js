import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import ProductDisplay from './ProductDisplayComponent';
import ShowPaintings from './PaintingsComponent';
import ShowAccessories from './AccessoriesComponent';
import ShowJewellery from './JewelleryComponent';
import ShowArtists from './ArtistsComponent';
import CheckoutPage from './CheckoutComponent';
import EventsComp from './EventsComponent';
import Renderservices from './ServicesComponent';
import Renderfree from './FreeComponent';
import Rendersell from './SellComponent';
import { ARTISTS } from '../shared/artists';
import { ACCESSORIES } from '../shared/accessories';
import { JEWELLERY } from '../shared/jewellery';
import { PAINTINGS } from '../shared/paintings';
import { REVIEWS } from '../shared/reviews';
import { DEALS } from '../shared/deals';
import { EVENTS } from "../shared/events";
import { FREES } from "../shared/frees";
import { SELLS } from "../shared/sells";
import { SERVICES } from "../shared/services";


// Main component working as container component, passing props to other presentational components and defining routes

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        artists: ARTISTS,
        accessories: ACCESSORIES,
        jewellery: JEWELLERY,
        paintings: PAINTINGS,
        reviews: REVIEWS,
        deals: DEALS,
        events: EVENTS,
        frees: FREES,
        sells: SELLS,
        services: SERVICES
    };
  }

  
  render() {
    const ProductPlaceholder = () => {
      return (
        <Home 
          painting={this.state.paintings.filter(painting => painting.featured)[0]}
          accessory={this.state.accessories.filter(accessory => accessory.featured)[0]}
          jewell={this.state.jewellery.filter(jewell => jewell.featured)[0]}
          eVent={this.state.events.filter(eVent => eVent.featured)[0]}
          deal={this.state.deals.filter(deal => deal.featured)[0]}
        />
      );
    }
     
    const SelectedProduct = ({match}) => {
      return (
        <ProductDisplay 
          painting={this.state.paintings.filter(painting => painting.id === +match.params.paintingId)[0]}
          accessory={this.state.accessories.filter(accessory => accessory.id === +match.params.accessoryId)[0]}
          jewell={this.state.jewellery.filter(jewell => jewell.id === +match.params.jewellId)[0]}
          previews={this.state.reviews.filter(review => review.paintingId === +match.params.paintingId)}
          areviews={this.state.reviews.filter(review => review.accessoryId === +match.params.accessoryId)}
          jreviews={this.state.reviews.filter(review => review.jewellId === +match.params.jewellId)}
        />
      );
    };
  

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={ProductPlaceholder} />
          <Route exact path='/paintings' render={() => <ShowPaintings paintings={this.state.paintings} />}  />
          <Route exact path='/accessories' render={() => <ShowAccessories accessories={this.state.accessories} />}  />
          <Route exact path='/jewellery' render={() => <ShowJewellery jewellery={this.state.jewellery} />}  />
          <Route exact path='/artists' render={() => <ShowArtists artists={this.state.artists} />}  />
          <Route exact path='/paintings/:paintingId' component={SelectedProduct} />
          <Route exact path='/accessories/:accessoryId' component={SelectedProduct} />
          <Route exact path='/jewellery/:jewellId' component={SelectedProduct} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/free' render={() => <Renderfree frees={this.state.frees} />}  />
          <Route exact path='/sell' render={() => <Rendersell sells={this.state.sells} />} />
          <Route exact path='/events' render={() => <EventsComp events={this.state.events} />}  />
          <Route exact path='/services' render={() => <Renderservices services={this.state.services} />}  />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default Main;