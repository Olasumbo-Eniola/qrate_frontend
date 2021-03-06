import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import artistData from '../../../artistData';

import Ratings from '../../../Ratings/Ratings.component';

import Button from '../../../Button/Button.component';

import Comment from '../../../Comment/Comment.component';

import Modal from '../../../Modal/Modal.component';

import './ArtWorkMain.style.scss';
// import Input from '../../../Input/Input.component';

class ArtWorkMain extends Component {
    constructor(props) {
        super(props);

        //Get the artists id and work routename from the url path
        const { params: { artistId, workId } } = this.props.match;

        //Get the artist object that corresponds to the id
        const [artist] = artistData.filter(artist => artist.id === Number(artistId));

        //Get the particular work object relating to the artist
        const [work] = artist.works.filter(work => work.routeName === workId);
        

        this.state = {
            work: work,
            isLiked: false,
            counter: 0,
            showCartModal: false,
            showCatalogueModal: false,
        }
    }

    showModal = (modal) => {
        // prevent scroll on body when modal is open
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}`; 

        //select which modal to show
        switch(true) {
            case modal === 'cartModal':
                this.setState({showCartModal: true});
                break;
            case modal === 'catalogueModal':
                this.setState({showCatalogueModal: true});
                break;
            default:
                return null;
        }
    }

    hideModal = (modal) => {
        //make body scrollable again
        const scrollY =document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';

        window.scrollTo(0, parseInt(scrollY || '0') * -1);

        //select modal to close
        switch(true) {
            case modal === 'cartModal':
                this.setState({showCartModal: false});
                break;
            case modal === 'catalogueModal':
                this.setState({showCatalogueModal: false});
                break;
            default:
                return null;
        }
    } 

    toggleLike = () => {
        this.setState({
            isLiked: !this.state.isLiked,
            counter: 0 ? 1 : 0,
        })
    }


    render () {
        //Destructuring keys off the state
        const {work, isLiked, counter, showCartModal, showCatalogueModal} = this.state;

        //Destructuring artistId off Params off the match props
        const { params: { artistId} } = this.props.match;

        //scroll Event Listener
        window.addEventListener('scroll', ()=> {
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
        })
       
        return(
            <div className='main'>
                <div className='artwork-main content'>
                    <div className='banner'>
                        <Link to={`/home/artist/${artistId}`}>
                            <i className="fas fa-arrow-left arrow-left"></i>
                        </Link>

                        <div className='banner-content'>
                            <div className='left'>
                                <h4>{work.name}</h4>
                                <p>by {work.artist}</p>
                                <Ratings />

                                <Modal show={showCartModal} close={() => this.hideModal('cartModal')}>
                                    <h5>Added to Cart</h5>

                                    <p> '{work.name}' artwork by {work.artist} was added to your cart </p>

                                    <div className='buttons'>
                                        <Button text='Continue' click={() => this.hideModal('cartModal')}/>
                                        <Button text='View cart and checkout'/>
                                    </div>
                                </Modal>

                                <Button inverted  text='ADD TO CART' click={() => this.showModal('cartModal')}/>

                                <div className='options'>
                                    <i className="far fa-comment mr-3"></i>
                                    <i className="fas fa-share-alt mr-3"></i>
                                    {
                                        isLiked===false && counter===0 ?
                                        <i className="far fa-heart mr-3" onClick={this.toggleLike}></i> :
                                        <span>
                                            <img
                                            className="liked mb-2" 
                                            src='/images/isLiked.svg' 
                                            alt='like'
                                            height={19}
                                            width={18}
                                            onClick={this.toggleLike}/>
                                        </span>
                                    }
                                </div>
                            </div>

                            <div className='right'>
                                <img src={work.imgUrl} alt='' />

                                <Button text='Save to Catalogue' click={() => this.showModal('catalogueModal')} />
                            </div>
                        </div>
                    
                    </div>

                    <div className='artwork-body'>
                        <div className='description'>
                            <h5>DESCRIPTION</h5>
                            <p>
                                Glossed art print is a very high quality embodiment. Created by {work.artist} as 
                                a way of portraying the importance of the reaction on the eyes. The eyes as a 
                                tool is powerful and describes emotions at different times.
                            </p>
                        </div>

                        <div className='frame'>
                            <h5>FRAME</h5>
                            <p>
                                {work.size}, {work.type}
                            </p>
                        </div>

                        <div className='price'>
                            <h5>PRICE</h5>
                            <p>
                                $ {work.price}
                            </p>
                        </div>


                        <Modal show={showCatalogueModal} close={() => this.hideModal('catalogueModal')}>
                            <h5>Save To Catalogue</h5>

                            <p> Which catalogue do you want to save it to? </p>

                            <div className='catalogue-options'>
                                <p className='new-catalogue'> <span role='img' aria-labelledby='plus'>&#43;</span>  New Catalogue</p>
                                <p className='catalogue'>MY FAVOURITES</p>
                                <p className='catalogue'>EMOTIONS</p>
                            </div>

                            <div className='buttons'>
                                <Button text='CANCEL' cancel click={() => this.hideModal('catalogueModal')}/>
                                <Button text='SAVE'/>
                            </div>
                        </Modal>

                        <Button text='Save to Catalogue' click={() => this.showModal('catalogueModal')}/>

                        <div className='comments-area'>
                            <div className='write-comment'>
                                <img className='artist-profile'  src='/images/user-img.png' alt='' />
                                <div>
                                    <textarea type='text' placeholder='Write a comment'/>
                                    <Button inverted>
                                        <i className="fas fa-paper-plane"></i>
                                    </Button>
                                </div>
                            </div>
                            <div className='comments'>
                                <Comment />
                                <Comment />
                                <Comment />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default ArtWorkMain;



//These are the remaining two modals after choosing catalogue to save to

// {/* <Modal show={} close={}>
//     <h5>New Catalogue</h5>

//     <Input type='text' placeholder='Type name of catalogue'/>

//     <div className='buttons'>
//         <Button text='Cancel' cancel/>
//         <Button text='CREATE'/>
//     </div>
// </Modal> */}


// {/* <Modal show={} close={}>
//     <h5>New Catalogue</h5>

//     <p>Save {work.name} to {value} Catalogue?</p>

//     <div className='buttons'>
//         <Button text='CANCEL' cancel/>
//         <Button text='SAVE'/>
//     </div>
// </Modal> */}

