import React from 'react';
import { FormattedMessage } from 'react-intl';
import Resize_SubPub_Action from './../../components/dumb/Resize_SubPub_Action';

export default class Resize_SubPub extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app-resize-subpub">
                <h1><FormattedMessage id="pages.resize_subpub"/></h1>
                <Resize_SubPub_Action />
            </div>
        );
    }
}
