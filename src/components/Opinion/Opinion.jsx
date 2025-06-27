import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import '../Opinion/style/Opinion.css'


const Opinion = () => {
  return (
    <div className='opinion'>
        <div className="wrapper">
            <div className="opinion__title">
                <p className='title'>
                    What People say about jiri
                </p>
                <p className="desc">
                    Hear from visitors who have experience the magic of jiri and shared their unforgettable moments with us.
                </p>
            </div>
            <div className="opinion__row">
                <div className="opinion__col">
                    <div className="opinion__col-bgImage">
                        <BiSolidQuoteSingleRight className='img'/>
                        <BiSolidQuoteSingleRight className='img'/>
                    </div>
                    <div className="opinion__col-visitorInfo">
                        <div className="photo">
                            <FaUser className='profilePic'/>
                        </div>
                        <div className="visitor-detail">
                            <p className="name">Dorji Sherpa</p>
                            <p className="profession">Photographer</p>
                        </div>
                    </div>
                    <div className="opinion__col-review">
                        <p className="review">
                            As a photographer, I found Jiri to be a paradise. The lighting, landscapes, and cultural elements provided endless opportunities for capturing stunning images. I'll definitely be returning!
                        </p>
                        <div className="rating">
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                        </div>
                    </div>
                </div>
                <div className="opinion__col">
                    <div className="opinion__col-bgImage">
                        <BiSolidQuoteSingleRight className='img'/>
                        <BiSolidQuoteSingleRight className='img'/>
                    </div>
                    <div className="opinion__col-visitorInfo">
                        <div className="photo">
                            <FaUser className='profilePic'/>
                        </div>
                        <div className="visitor-detail">
                            <p className="name">Dorji Sherpa</p>
                            <p className="profession">Photographer</p>
                        </div>
                    </div>
                    <div className="opinion__col-review">
                        <p className="review">
                            As a photographer, I found Jiri to be a paradise. The lighting, landscapes, and cultural elements provided endless opportunities for capturing stunning images. I'll definitely be returning!
                        </p>
                        <div className="rating">
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                        </div>
                    </div>
                </div>
                <div className="opinion__col">
                    <div className="opinion__col-bgImage">
                        <BiSolidQuoteSingleRight className='img'/>
                        <BiSolidQuoteSingleRight className='img'/>
                    </div>
                    <div className="opinion__col-visitorInfo">
                        <div className="photo">
                            <FaUser className='profilePic'/>
                        </div>
                        <div className="visitor-detail">
                            <p className="name">Dorji Sherpa</p>
                            <p className="profession">Photographer</p>
                        </div>
                    </div>
                    <div className="opinion__col-review">
                        <p className="review">
                            As a photographer, I found Jiri to be a paradise. The lighting, landscapes, and cultural elements provided endless opportunities for capturing stunning images. I'll definitely be returning!
                        </p>
                        <div className="rating">
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                            <FaStar className='icon'/>
                        </div>
                    </div>
                </div>
            </div>
            <button className="opinion__btn">View More Testimonials</button>
        </div>
      
    </div>
  )
}

export default Opinion
