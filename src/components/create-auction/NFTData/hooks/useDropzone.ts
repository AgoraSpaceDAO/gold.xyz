import {
  DropzoneOptions,
  DropzoneState,
  useDropzone as useReactDropzone,
} from "react-dropzone"

type Props = {
  maxSizeMb?: number
} & DropzoneOptions

const useDropzone = ({
  maxSizeMb = 10,
  ...dropzoneOptions
}: Props = {}): DropzoneState =>
  useReactDropzone({
    ...dropzoneOptions,
    accept: dropzoneOptions.accept ?? "image/*",
    noClick: dropzoneOptions.noClick ?? true,
    maxSize: dropzoneOptions.maxSize ?? maxSizeMb * 1024 * 1024,
    multiple: true,
  })

export default useDropzone
