import React, { ChangeEvent, HTMLProps } from 'react';
import { Button } from 'antd';
import './UploadInput.scss';
import { useAppDispatch } from '../../../store/hooks';
import { IUserState, setUser } from '../../../store/reducers/userReducer';
import UserSettingsApi from '../../../api/user/user-settings';

type UploadInputProps = HTMLProps<HTMLInputElement> & {
    label?: string,
    id?: string
};

const UploadInput = React.forwardRef<HTMLInputElement, UploadInputProps>((props, ref) => {
    const {
        id, label, className, name,
    } = props;
    const dispatch = useAppDispatch();
    const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.currentTarget.parentElement?.click();
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData();
        Array.from((e.target as HTMLInputElement)?.files || []).forEach((file) => {
            formData.append('avatar', file);
        });
        UserSettingsApi.changeAvatar(formData).then((response) => {
            if (response) {
                dispatch(setUser(response as IUserState));
            }
        }).catch((err) => {
            console.error(err);
        });
    };
    return (
        <label htmlFor={id} data-title={label} className={`upload-input ${className || ''}`}>
            <input type="file" id={id} name={name} ref={ref} onChange={(e) => handleChange(e)} />
            <Button htmlType="button" type="primary" onClick={onClickHandler}>
                Upload
            </Button>
        </label>
    );
});

UploadInput.defaultProps = {
    label: '',
    id: `upload-input-${Math.floor(Math.random() * 10000)}`,
};

export default UploadInput;
