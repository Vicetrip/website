import React, { Component } from 'react';
import './anim-box.css'

import shape1 from'../../../../Assets/icon-box/shape1.png'
import shape2 from'../../../../Assets/icon-box/shape2.png'
import shape3 from'../../../../Assets/icon-box/shape3.png'
import shape4 from'../../../../Assets/icon-box/shape4.png'
import shape5 from'../../../../Assets/icon-box/shape5.png'
import shape6 from'../../../../Assets/icon-box/shape6.png'

class AnimBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="icon-effects-w3l">
				<img src={shape1} alt="" className="img-fluid shape shape-one" />
				<img src={shape2} alt="" className="img-fluid shape shape-two" />
				<img src={shape3} alt="" className="img-fluid shape shape-three" />
				<img src={shape5} alt="" className="img-fluid shape shape-four" />
				<img src={shape4} alt="" className="img-fluid shape shape-five" />
				<img src={shape6} alt="" className="img-fluid shape shape-six" />
			</div>
         );
    }
}
 
export default AnimBox;