type Props = {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const LocationInput = ({ location, setLocation }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <p className="py-1">Location</p>
      <label
        htmlFor="Location-input"
        className=" hidden absolute left-[-9999px]"
      >
        Location
      </label>
      <input
        className="w-full p-4 border rounded bg-neutral-100 border-neutral-200"
        type="text"
        placeholder="Location"
        id="Location-input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
};
export default LocationInput;
