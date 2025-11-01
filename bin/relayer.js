for (const [i, str] of valuesArr.entries()) {
      const [value, bits] = str.split(':');
      if (!allowedBits.includes(+bits)) throwError('Invalid number of bits');
      const suffix = +bits === 1 ? 'Bool' : bits === '160' ? 'Address' : bits;
      try {
        encryptedInput[`add${suffix}`](parseInt(value, 10));
      } catch (e) {
        return throwError(e.message);
      }
}
