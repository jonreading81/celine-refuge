type Props = {
  loading?: string;
  error?: string;
  success?: string;
};

export const FormStatus = ({ loading, error, success }: Props) => (
  <>
    {loading && (
      <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
        <span className="font-medium">{loading}</span>
      </div>
    )}
    {error && (
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
        <span className="font-medium">{error}</span>
      </div>
    )}
    {success && (
      <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
        <span className="font-medium">{success}</span>
      </div>
    )}
  </>
);
