export default {
  /**
   * Format number with thousand separator.
   * e.g 2500000 to "2.500.000"
   */
  number: (num: string | number | bigint | null) => {
    if (typeof num === 'string') {
      num = parseInt(num)
    }

    if (typeof num === 'number' || typeof num === 'bigint') {
      return new Intl.NumberFormat('id-ID').format(num)
    }

    return '0'
  },

  /**
   * Format number to easier human readable format.
   * e.g 2500 to "2,5 rb".
   */
  numberAbbreviate: (num: string | number | bigint) => {
    if (typeof num === 'string') {
      num = parseInt(num)
    }

    if (typeof num === 'number' || typeof num === 'bigint') {
      return Intl.NumberFormat('id-ID', {
        notation: 'compact',
        maximumFractionDigits: 1,
      }).format(num)
    }

    return '0'
  },
}
