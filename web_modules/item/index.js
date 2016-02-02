import React, {component} from "react"
const Item = ({name = ""}) => {

	return <div className="item">{name}</div>
}
export default Item