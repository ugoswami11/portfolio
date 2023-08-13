

export default function WorkItems({item}){
    return(
        <div className="work-card" key={item.id}>
            <img src={item.image} alt="" className="work-img"/>
            <h3 className="work-title">{item.title}</h3>
            <p className="work-description">{item.description}</p>
            <div className="work-actions">
                <a href={item.liveLink} target="_blank" className={item.live === false ? "work-button work-button-disabled": "work-button"}>
                    Demo <i className="bx bx-right-arrow-alt work-button-icon"></i>
                </a>
                <a href={item.projectLink} target="_blank" className="work-button">
                    Code <i className="bx bx-right-arrow-alt work-button-icon"></i>
                </a>
            </div>
            
        </div>
    );
}