import { defineStore } from "pinia";
import { ref } from "vue";

export const userUserStore = defineStore(
  "userStore",
  () => {
    const userHairColor = ref('')
    const userEyeColor = ref('')
    const userSkinTone = ref('')
    const userUnderTone = ref('')

    function setUserInfo(skinTone, underTone, hairColor, eyeColor) {
        userHairColor.value = hairColor
        userEyeColor.value = eyeColor
        userSkinTone.value = skinTone
        userUnderTone.value = underTone
    }
    
    return {
      userEyeColor,
      userHairColor,
      userSkinTone,
      userUnderTone,
      setUserInfo
    };
  },

  { persist: true }
);
