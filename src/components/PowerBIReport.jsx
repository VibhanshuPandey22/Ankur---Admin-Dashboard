import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client';
import './home.css';

const PowerBIReport = ({ embedUrl, accessToken }) => {
  return (
    <div className="report-container">
      <PowerBIEmbed
        embedConfig = {{
            type: 'report',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=528af010-1a92-4f9a-9a5c-b6c675b289cf&groupId=b18a11fe-c5e2-4a2b-937e-ff589b109968&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyIsImtpZCI6Ikg5bmo1QU9Tc3dNcGhnMVNGeDdqYVYtbEI5dyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWI0ZWFhYWQtYjg4Ny00OGNmLTg0MDctZTk5NDIwZWRhMmZiLyIsImlhdCI6MTcyNTE4Nzc3MiwibmJmIjoxNzI1MTg3NzcyLCJleHAiOjE3MjUxOTE5MTYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUFyRHRPanZqN01pNTZNZnJram9IOUUvWjZzUG5RVFlpTnRUTTd2c0h4UU13dVZjbDROcENsK1c3TkowMEhmOERqVFowcjRWTzc2VUExOHZhVkN0VkJMRk5Vc28zdmNvVmdDYzJtOCt5TDVnYz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJQUkFTQUQiLCJnaXZlbl9uYW1lIjoiQU5LVVNIIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjQwNToyMDE6NDAxZjo2MjFmOmI5ZGM6NTRiNTphMjQ3OmQyNTAiLCJuYW1lIjoiMTQxMTQ4MDMxMjIiLCJvaWQiOiI2NmQwY2Q3ZS03MjNlLTQ5OTYtYTZhNy1kZDliZWJiNDYwMWMiLCJwdWlkIjoiMTAwMzIwMDMxNEM1NzZFMCIsInJoIjoiMC5BVllBcmFwT0c0ZTR6MGlFQi1tVUlPMmktd2tBQUFBQUFBQUF3QUFBQUFBQUFBQldBRzQuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiWDNmeWUwM3RXWWFYeS10VnlwMXFOQ2NuX1lnNTQyTlVCbTZDclFEbWVlOCIsInRpZCI6IjFiNGVhYWFkLWI4ODctNDhjZi04NDA3LWU5OTQyMGVkYTJmYiIsInVuaXF1ZV9uYW1lIjoiYW5rdXNoLjE0MTE0ODAzMTIyQGl0Lm1haXQuYWMuaW4iLCJ1cG4iOiJhbmt1c2guMTQxMTQ4MDMxMjJAaXQubWFpdC5hYy5pbiIsInV0aSI6IkJqZlFWVEhnT2tHNTlXZWVrcDQ4QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDI2In0.NhW2SMdY8nBlHdnena-n6CvIMyFQnrHrKxnCYTZbEfESuHs3N_hvyosw84oQb8_lpY4kdNK5uIzdSzryzYzW4aUbvBBQpjuJVRdOy92ZR2_QOUMB1AETCeadLQdUznNjtOabwdcCuWF7uMKuxG75nMruJF8b6_hdHwcfseSe2ozVeDZVkVs7MUtNNemWDTrMaagZQxoCNxBALkb5BRQ5GLRpQnR9ol_0WGK3ivo8OX9vvyX7-Ro3N8Edoe2rKhffhFGDQRgtYwmLAQ-V6-_keaDdXIJ5i5Pne3DT4V_SXZl0izTprqBqzsBBG4UzeUrUeyaaqzigN7yjRyZAXd9fDg',
            tokenType: models.TokenType.Aad,
            settings: {
                filterPaneEnabled: true,
                navContentPaneEnabled: true,
              },
          }}
            cssClassName="report-container"
            getEmbeddedComponent={(embeddedReport) => {
            console.log('Embedded Report:', embeddedReport);
        }}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default PowerBIReport;
