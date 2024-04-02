export default () => {
    return {
        formatDate() {
            return 'zzz';
        },
        formatDateBetween(date) {
            if (!date.start.formatted) return '';
            if (!date.final.formatted) return '';
            let start = date.start.formatted;
            let final = date.final.formatted;
            return `${start} and ${final}`;
        },
        formatLocation(location) {
            return [
                location.city,
                location.state,
                location.country,
            ].filter(v => !!v).join(', ');
        },
    };
};