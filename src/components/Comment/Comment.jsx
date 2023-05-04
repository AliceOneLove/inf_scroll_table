import React, { useState } from 'react';

const Comment = ({id}) => {
    const [comment, setComment] = useState(localStorage.getItem(id) ?? '');
    const changeHandler = (e) => {
        localStorage.setItem(id, e.target.value);
        setComment(e.target.value);
    };

    return (
        <td>
            <textarea
                value={comment}
                onChange={changeHandler}
            />
        </td>
    );
};

export default Comment;