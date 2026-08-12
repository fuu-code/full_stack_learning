var count = 99;

function beer() {
  while (count > 0) {
    console.log(
      count +
        " bottles of beer on the wall, " +
        count +
        " bottles of beer. Take 1 down, pass it around, " +
        (count - 1) +
        " bottles of beer on the wall.",
    );
    if (count === 1) {
      console.log(
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " +
          count * 99 +
          " bottles of beer on the wall.",
      );
    }

    count = count - 1;
  }
}

beer();
