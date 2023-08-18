import React, { useState } from "react"
// import {useRouter}


const Detail = (props) => {
    // console.log(props, 'props');
  // eslint-disable-next-line react/prop-types,no-unused-vars
    const [Id, useId] = useState(props.match.params.id)

    return (<div>
        <h1>{Id}</h1>
    </div>)
}

export default Detail
