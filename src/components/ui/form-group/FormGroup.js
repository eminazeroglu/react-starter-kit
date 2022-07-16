import {Tooltip} from "antd";

export default function FormGroup(
    {
        label,
        labelRight,
        noBorder = false,
        labelClass,
        className,
        prefix,
        disabled,
        tooltip,
        suffix,
        error,
        errorMessage,
        required,
        children,
        elementClass,
        elementStyle,
    }
) {
    let addonClass = '';
    if (prefix && suffix) addonClass = 'form-group--addon';
    else if (prefix) addonClass = 'form-group--addon-prefix';
    else if (suffix) addonClass = 'form-group--addon-suffix';
    return (
        <div
            className={`form-group ${className || ''} ${noBorder ? 'form-group--no-border' : ''} ${error ? ' form-group--error' : ''} ${addonClass} ${disabled ? 'form-group--disabled' : ''}`}>
            {label && (
                <label className={`form-label ${labelClass || ''} ${labelRight ? 'flex justify-between' : ''}`}>
                    <span className="flex space-x-1">
                        <span dangerouslySetInnerHTML={{__html: label}}/>
                        {required && (
                            <span className="text-red-500">*</span>
                        )}
                        {tooltip && (
                            <Tooltip title={tooltip}>
                                <i className="icon-info"/>
                            </Tooltip>
                        )}
                    </span>
                    {labelRight || ''}
                </label>
            )}
            <div className={`form-element ${elementClass || ''}`} style={elementStyle}>
                {suffix && <div className="form-suffix">{suffix}</div>}
                {children}
                {prefix && <div className="form-prefix">{prefix}</div>}
            </div>
            {(error && errorMessage) && (
                <div className="form-error" dangerouslySetInnerHTML={{__html: errorMessage}}/>
            )}
        </div>
    );
}
