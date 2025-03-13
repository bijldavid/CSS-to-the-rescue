const ranges = document.querySelectorAll('[type="range"]');

const updateRange = range => {
    const rangeName = range.name;
    const rangeValue = range.value;
    const unit = range.dataset.unit;

    document.documentElement.style.setProperty("--" + rangeName, rangeValue + unit);
}

ranges.forEach(range => {
    updateRange(range);

    range.oninput = () => {
        updateRange(range)
    };
});