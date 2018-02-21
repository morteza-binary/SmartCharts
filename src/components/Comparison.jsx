import React from 'react';
import Menu from './Menu.jsx';
import { connect } from '../store/Connect';
import SymbolsCategoricalDisplay from './SymbolsCategoricalDisplay.jsx';

const Comparison = ({
    activeSymbols,
    onSelectItem,
    isOpened,
    setOpen,
}) => {
    return (
        <Menu
            className="cq-comparison-new cq-categorical-display"
            isOpened={isOpened}
            setOpen={setOpen}
        >
            <Menu.Title>
                <span className="ciq-icon ciq-ic-comparison" />
            </Menu.Title>
            <Menu.Body>
                <SymbolsCategoricalDisplay
                    isShown={isOpened}
                    activeSymbols={activeSymbols}
                    onSelectItem={onSelectItem}
                />
            </Menu.Body>
        </Menu>
    );
};

export default connect(
    ({ comparison: c }) => ({
        activeSymbols: c.activeSymbols,
        isOpened: c.isOpened,
        setOpen: c.setOpen,
        onSelectItem: c.onSelectItem
    })
)(Comparison);