const UserInput = ({
    text,
    value,
    action,
    type,
}) => {
    return (
        <input className='user-input-home'
            type={type}
            placeholder={text}
            value={value}
            onChange={action}
        />
    );
};

export default UserInput;