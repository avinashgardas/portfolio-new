import React, { Component } from "react";
import CircularLazyLoad from "../CircularLazyLoad";
import './_lazyLoadModal.scss';

export default class LazyLoadModal extends Component {
    render() {
        return (
            <div className="lazy-load-modal">
                <div className="lazy-load-modal-text">
                    <CircularLazyLoad />
                </div>
            </div>
        );
    }
}
