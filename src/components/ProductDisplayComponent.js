import React  from "react";
import { Button,  Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Component } from 'react';
import { Link } from "react-router-dom";
import { GlassMagnifier } from 'react-image-magnifiers';



function RenderProduct({product}) {

    
    return(
         <>
            <div className="col-md-7 mt-4">

                <GlassMagnifier
                imageSrc={product.image} width="90%" square magnifierSize="50%"
                imageAlt={product.image}
                />
               
            </div>

            <div className="col-md-4 mt-5">
                <h1>{product.name}</h1>
                <i class="fa fa-star" />{' '}
                <i class="fa fa-star"/> {' '}
                <i class="fa fa-star"/> {' '}
                <i class="fa fa-star"/> {' '}
                <i class="fa fa-star"/> 
                
                <h2>{product.price}</h2>
                <p>plus taxes</p>
                <h5>{product.sales}</h5>
                <h5>{product.description}</h5>
                <h5><i class="fa fa-truck" /> {' '} Free shipping</h5>
                 <AddtoBag /> 
            </div>
        </>
    );
}


function RenderReviews({reviews}) {
    if (reviews) {
        return(
            <div className="col mt-5">
                <h2>Reviews</h2>
                <i class="fa fa-star" />{' '}
                <i class="fa fa-star"/> {' '}
                <i class="fa fa-star"/> {' '}
                <i class="fa fa-star"/> {' '}
                <i class="fa fa-star"/>
                <p></p>
                <hr/>
                
                {reviews.map(review => 
                    <div className="mt-4"
                    key={review.id}> 

                <i class="fa  fa-user fa-lg"/> {' '}

                <i class="fa fa-star" />{' '}
                <i class="fa fa-star"/> {' '}
                <i class="fa fa-star"/> {' '}
                <i class="fa fa-star"/> {' '}
                <i class="fa fa-star"/>  <br/>
                        {review.text} <br/> -- {review.author}, {review.date} 
                    </div>)}

                
            </div>
        );
    }
    return <div />;
}

function ProductDisplay(props) {
   if (props.painting){
    return(
        <div className="container">
            <div className="row">
        
                <RenderProduct product={props.painting} />
           
                <RenderReviews reviews={props.previews} />
                
            </div>
         </div>
    );
    } else if (props.accessory) {
        return(
            <div className="container">
                <div className="row">
                    <RenderProduct product={props.accessory} />
                    <RenderReviews reviews={props.areviews} />
                </div>
                
            </div>
    ) 
    } else if (props.jewell) {
        return(
            <div className="container">
                <div className="row">
                    <RenderProduct product={props.jewell} />
                    <RenderReviews reviews={props.jreviews} />
                </div>
                
            </div>
    ) 
    }
}

class AddtoBag extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModal: false
                
        };
    }
    
    toggleModal = () =>  {
        this.setState({
            isModal: !this.state.isModal
        });
    }

    
    handleSubmit() {
        this.toggleModal();
    }

    
    render() {
        return(
            <>
                <Button onClick={this.toggleModal} size="lg" block> <i class="fa fa-shopping-bag" /> Add to Bag
                </Button>
                <Modal isOpen={this.state.isModal} toggle={this.toggleModal}>
                    <ModalHeader style={{ background: "#abd4fa" }} toggle={this.toggleModal}>Added to cart</ModalHeader>
                    <ModalBody>
                        <Button onClick={this.toggleModal}>Keep Shopping</Button> {' '}
                        <Button  style={{ color: "white" }} ><Link to='/checkout'>Proceed to check out</Link></Button>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default ProductDisplay;