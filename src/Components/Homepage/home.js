import React from 'react'

import UserImage from '../../assets/images/user.png'
import FaceIcon from '../../assets/images/Vector (1).png'
import CalendarIcon from '../../assets/images/Vector (2).png'
import CardIcon from '../../assets/images/Vector.png'
import EllipseIcon from '../../assets/images/Ellipse 26.png'
import PaintPaletteIcon from '../../assets/images/paint-palette 1.png'
import MonaLisa from '../../assets/images/mona-lisa-by-leonardo-da-vinci 1.png'
import Painting from '../../assets/images/RTX6W7OQ-e1560441912537 1.png'
import CommentIcon from '../../assets/images/Vector (3).png'
import HeartIcon from '../../assets/images/Vector (4).png'
import ShareIcon from '../../assets/images/Vector (5).png'

import './home.css'


const home =() =>{
        return(
            <>
                <div className="main content">
                    <div className="home__container">
                        <div className="home__main">
                            
                            {/* Section One */}
                            <section className="home__main__card1">
                                <div className="home__main__card2__img-section">
                                    <img  className="home__main__card2__img" src={UserImage} alt="UserImage" />
                                </div>
                                <div>
                                    <p className="home__main__card1__text">Any art buzz you want to share, feranmiolowo?</p>
                                    <div className="home__main__card1__lower">
                                        <div className="home__main__card1__lower__img-container">
                                            <img  className="home__main__card1__lower__img" src={CardIcon} alt="CardIcon" />
                                            <img  className="home__main__card1__lower__img" src={FaceIcon} alt="FaceIcon" />
                                            <img  className="home__main__card1__lower__img" src={CalendarIcon} alt="CalendarIcon" />
                                        </div>
                                        <button className="btn home__main__card1__btn">POST</button>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Section  Two*/}
                            <section className="home__main__card2">
                                <div className="home__main__card2__img-section">
                                    <img  className="home__main__card2__img" src={UserImage} alt="UserImage" />
                                </div>
                                <div className="home__main__card2__content">
                                    <div className="home__main__card2__upper">
                                        <p className="home__main__card2__text">artistgod</p>
                                        <img  className="home__main__card2__icon" src={EllipseIcon} alt="EllipseIcon" />
                                        <div className="home__main__card2__icon-container">
                                            <img className="home__main__card2__icon" src={PaintPaletteIcon} alt="PaintPaletteIcon" />
                                            <p className="home__main__card2__icon__text" >Artiste</p>
                                        </div>
                                    </div> 
                                    <h6 className="home__main__card2__header">Mona Lisa</h6>
                                    <p className="home__main__card2__body">
                                    Da Vinci’s masterpiece is probably the most recognized artwork in the world today, and the most visited. Also known as La Giaconda, the painting is believed to illustrate the wife of wealthy Florentine merchant Francesco di Bartolomeo del Giocondo.
                                    </p>
                                    <div className="home__main__card2__body-image__container">
                                        <img className="home__main__card2__body-image1" src={MonaLisa} alt="body-image" />
                                        <img className="home__main__card2__body-image2" src={Painting} alt="body-image" />
                                    </div>
                                    <div className="home__main__card2__lower">
                                        <div className="home__main__card2__lower__group1">
                                            <img className="home__main__card2__lower__group1__icon1" src={CommentIcon} alt="CommentIcon" />
                                            <span>2</span>
                                        </div>
                                        <div className="home__main__card2__lower__group2">
                                            <img className="home__main__card2__lower__group1__icon1" src={HeartIcon} alt="HeartIcon" />
                                            <span>108</span>
                                        </div>
                                        <div className="home__main__card2__lower__group3__container ml-auto">
                                            <img className="home__main__card2__lower__group3__icon1 pb-3 pr-2" src={ShareIcon} alt="ShareIcon" />
                                            <p className="home__main__card2__lower__group3__text">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section Three */}
                            <section className="home__main__card3">
                                <div className="home__main__card2__img-section">
                                    <img  className="home__main__card2__img" src={UserImage} alt="UserImage" />
                                </div>
                                <div className="home__main__card2__content">
                                    <div className="home__main__card2__upper">
                                        <p className="home__main__card2__text">artistgod</p>
                                        <img  className="home__main__card2__icon" src={EllipseIcon} alt="EllipseIcon" />
                                        <div className="home__main__card2__icon-container">
                                            <img className="home__main__card2__icon" src={PaintPaletteIcon} alt="PaintPaletteIcon" />
                                            <p className="home__main__card2__icon__text" >Artiste</p>
                                        </div>
                                    </div> 
                                    <h6 className="home__main__card2__header">Mona Lisa</h6>
                                    <p className="home__main__card2__body">
                                    Da Vinci’s masterpiece is probably the most recognized artwork in the world today, and the most visited. Also known as La Giaconda, the painting is believed to illustrate the wife of wealthy Florentine merchant Francesco di Bartolomeo del Giocondo.
                                    </p>
                                    <div className="home__main__card2__body-image__container">
                                        <img className="home__main__card2__body-image1" src={MonaLisa} alt="body-image" />
                                        <img className="home__main__card2__body-image2" src={Painting} alt="body-image" />
                                    </div>
                                    <div className="home__main__card2__lower">
                                        <div className="home__main__card2__lower__group1">
                                            <img className="home__main__card2__lower__group1__icon1" src={CommentIcon} alt="CommentIcon" />
                                            <span>2</span>
                                        </div>
                                        <div className="home__main__card2__lower__group2">
                                            <img className="home__main__card2__lower__group1__icon1" src={HeartIcon} alt="HeartIcon" />
                                            <span>108</span>
                                        </div>
                                        <div className="home__main__card2__lower__group3__container ml-auto">
                                            <img className="home__main__card2__lower__group3__icon1 pb-3 pr-2" src={ShareIcon} alt="ShareIcon" />
                                            <p className="home__main__card2__lower__group3__text">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section Four */}
                            <section className="home__main__card4">
                                <div className="home__main__card2__img-section">
                                    <img  className="home__main__card2__img" src={UserImage} alt="UserImage" />
                                </div>
                                <div className="home__main__card2__content mb-5">
                                    <div className="home__main__card2__upper">
                                        <p className="home__main__card2__text">artistgod</p>
                                        <img  className="home__main__card2__icon" src={EllipseIcon} alt="EllipseIcon" />
                                        <div className="home__main__card2__icon-container">
                                            <img className="home__main__card2__icon" src={PaintPaletteIcon} alt="PaintPaletteIcon" />
                                            <p className="home__main__card2__icon__text" >Artiste</p>
                                        </div>
                                    </div> 
                                    <h6 className="home__main__card2__header">Mona Lisa</h6>
                                    <p className="home__main__card2__body">
                                    Da Vinci’s masterpiece is probably the most recognized artwork in the world today, and the most visited. Also known as La Giaconda, the painting is believed to illustrate the wife of wealthy Florentine merchant Francesco di Bartolomeo del Giocondo.
                                    </p>
                                    <div className="home__main__card2__body-image__container">
                                        <img className="home__main__card2__body-image1" src={MonaLisa} alt="body-image" />
                                        <img className="home__main__card2__body-image2" src={Painting} alt="body-image" />
                                    </div>
                                    <div className="home__main__card2__lower">
                                        <div className="home__main__card2__lower__group1">
                                            <img className="home__main__card2__lower__group1__icon1" src={CommentIcon} alt="CommentIcon" />
                                            <span>2</span>
                                        </div>
                                        <div className="home__main__card2__lower__group2">
                                            <img className="home__main__card2__lower__group1__icon1" src={HeartIcon} alt="HeartIcon" />
                                            <span>108</span>
                                        </div>
                                        <div className="home__main__card2__lower__group3__container ml-auto">
                                            <img className="home__main__card2__lower__group3__icon1 pb-3 pr-2" src={ShareIcon} alt="ShareIcon" />
                                            <p className="home__main__card2__lower__group3__text">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="home__side">Side area</div>
                    </div>
                </div>    
            </>
        )
}

export default home;