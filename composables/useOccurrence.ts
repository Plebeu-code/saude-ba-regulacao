export const useOccurrence = () => {

  const _occurrence = useCookie<number | null>("occurrence")

  const hasOccurence = computed(() => !!_occurrence.value)

  function setOccurrence(occurrence: number) {
    _occurrence.value = occurrence
  }

  function delOccurrence() {
    _occurrence.value = null
  }

  function reFetchOcorrence() {
    _occurrence.value = useCookie<typeof _occurrence.value>("occurrence").value
  }
  
  return {
    occurrence: readonly(_occurrence),
    hasOccurence: readonly(hasOccurence),
    setOccurrence,
    delOccurrence,
    reFetchOcorrence
  }
}