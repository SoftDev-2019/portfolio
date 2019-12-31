import React, { Component } from 'react';
import './project.styles.scss';
import GeneralsProjectImage from '../../assets/Generals.jpg';
import CrownClothingProjectImage from '../../assets/CrownClothing.jpg';
import ReactSVG from '../../assets/react.svg';
import ReduxSVG from '../../assets/redux.svg'
import FirebaseSVG from '../../assets/firebase.svg';
import SassSVG from '../../assets/sass.svg';
import JSSVG from '../../assets/javascript.svg';
import CSS3SVG from '../../assets/css3.svg'
import HTML5SVG from '../../assets/html5.svg';
import NodeSVG from '../../assets/node-dot-js.svg';

class ProjectCard extends Component {
    static defaultProps = {
        data:  [
            {
                id: 1,
                name: 'Franklin Generals',
                imageUrl: GeneralsProjectImage,
                gitUrl: 'https://github.com/SoftDev-2019/frklngenerals',
                projectUrl: 'https://franklingeneralsdb.web.app/',
                stack: [ JSSVG,
                    ReactSVG,
                    ReduxSVG,
                    SassSVG,
                    CSS3SVG,
                    HTML5SVG,
                    FirebaseSVG,
                    NodeSVG
                ]
            },
            {
                id: 2,
                name: 'Crown-Clothing',
                imageUrl: CrownClothingProjectImage,
                gitUrl: 'https://github.com/SoftDev-2019/crown-clothing-node',
                projectUrl: 'https://softdev-2019-crowndb.web.app/',
                stack: [ JSSVG,
                    ReactSVG,
                    ReduxSVG,
                    SassSVG,
                    CSS3SVG,
                    HTML5SVG,
                    FirebaseSVG,
                    NodeSVG
                    
                ]
            },
        ]
    };

    render() {
        let { data } = this.props;
        
        return (
           data.map(project => (
                <div className='projectcard-container'>
                 <h5 className='projectcard-title'><a target={"_blank"} href={project.gitUrl} style={{color: 'gray', opacity: 0.8}}>{project.name}</a></h5>
                    <a className='projectcard-link' target={"_blank"} href={project.projectUrl} alt='' style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: 'contain',
                    
                    }} ><span></span></a>
                   
                    <div className='projectcard-techimage-container d-sm-flex d-lg-flex'>
                        { project.stack.map(s =>
                            <img className='projectcard-techimage' src={s} alt='' />
                        )}
                    </div>
                </div>
           ))
        )
    }
}


export default ProjectCard;
