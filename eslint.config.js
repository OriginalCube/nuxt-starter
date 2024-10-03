import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default antfu(
  {
    stylistic: false,
  },
  eslintPluginPrettierRecommended,
  {},
)
