const tooltip = {
    showTooltip: (text) => {
        const oldTooltip = document.querySelector('.tooltip');
        if(oldTooltip) oldTooltip.remove();
        
        const tooltipElement = document.createElement('DIV');
        tooltipElement.classList.add('tooltip')
        tooltipElement.textContent = text;

        document.body.appendChild(tooltipElement);

        const width = document.body.getBoundingClientRect().width;

        tooltipElement.style.right = width / 2 - tooltipElement.offsetWidth / 2 + 'px';
        tooltipElement.style.top = 0 + 'px';
    },

    removeTooltip: () => {
        const oldTooltip = document.querySelector('.tooltip');
        if(oldTooltip) oldTooltip.remove();
    }
}

export default tooltip;