const FindSpareChairs = (meetingRooms) => {
    const spareChairs = meetingRooms.map(x => {
        const occupants = x[0].split('').filter(char => char === 'X').length;
        return x[1] - occupants;
    });
    return spareChairs;
};


module.exports = {
    ValidateFindSpareChairs: (meetingRooms, needed) => {
        // Find available chairs in all rooms
        const spareChairs = FindSpareChairs(meetingRooms);

        // Remove House full entries rooms
        spareChairs.map(function (value, index) {
            if (value < 0) {
                spareChairs.splice(index, 1);
            }
        });

        console.log("Result => ", spareChairs);

        // Sum of available chairs of all rooms
        const availableChairsSum = spareChairs.reduce((a, b) => a + b, 0);
        return needed === 0 ? 0 : (availableChairsSum >= needed ? 1 : 0);
    }
}